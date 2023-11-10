import {APIRequestContext, APIResponse} from "@playwright/test" 
import { strict } from "assert";

export class ApiUtility {
    request:APIRequestContext;

    constructor(req:APIRequestContext){
        this.request=req;
    }

    public async makeRequest(endpoint:string, method:string, requestbody?:object, token?:string):Promise<APIResponse> 
    {
        const res = await this.request[method](endpoint, {
            headers: token ? { 'Cookie': `token=${token}`} : {},
            data: requestbody,
        });
        return res;    
    }

    public async getRequest (endpoint: string):Promise<APIResponse>
    {
        return this.makeRequest(endpoint, 'get');
    };

    public async postRequest (endpoint: string, requestbody: object):Promise<APIResponse>
    {
        return this.makeRequest(endpoint, 'post', requestbody);
    };

    public async putRequest (endpoint: string, requestbody: object):Promise<APIResponse>
    {
        return this.makeRequest(endpoint, 'put', requestbody);
    };

    public async deleteRequest (endpoint: string):Promise<APIResponse>
    {
        return this.makeRequest(endpoint, 'delete');
    };
}