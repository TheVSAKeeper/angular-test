import { Injectable, signal } from "@angular/core";
import { environment } from "../../environments/environment";
import { Hanko, register, User } from "@teamhanko/hanko-elements";
import * as jose from "jose";

@Injectable({
    providedIn: 'root',
})
export class HankoService
{
    public user = signal<User | null>(null);

    private api: string = environment.HANKO_API_URL;
    public client: Hanko = new Hanko(this.api);

    public constructor()
    {
        register(this.api).catch(console.error);
        this.client.onSessionCreated(async detail => this.user.set(await this.client.user.getCurrent()))
    }

    public get isLogon(): boolean
    {
        return this.client.session.isValid();
    }

    public get accessToken()
    {
        return this.client.session.get().jwt;
    }

    public async updateUser()
    {
        this.user.set(await this.client.user.getCurrent());
    }

    public logout()
    {
        return this.client.user.logout();
    }
    
    public async getUserInfo()
    {
        let payload;
        let token = this.client.session.get().jwt ?? "";
        try
        {
            payload = jose.decodeJwt(token);

        } catch (e)
        {
            console.error(e)
        }

        await this.verifyToken(token);

        return {
            token: token,
            payload: payload
        };
    }

    public async verifyToken(token: string): Promise<boolean>
    {
        const JWKS = jose.createRemoteJWKSet(new URL(`${environment.HANKO_API_URL}/.well-known/jwks.json`));
        try
        {
            const verifiedJWT = await jose.jwtVerify(token ?? "", JWKS);
            console.log("Token verified = " + verifiedJWT.payload);
            return true;
        } catch (e)
        {
            console.error(e);
            return false;
        }
    }
}
