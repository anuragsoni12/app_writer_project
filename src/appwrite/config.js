import conf from "../conf/conf";

import { Client, Databases, Storage, Query } from "appwrite";




export class Service {
    client = new Client()
    dataBases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.dataBases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }
    async createPost({ title, slug, content, featuredImg, status, userId }) {
        try {
            return await this.client.dataBases.createDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId,
                }

            )
        }
        catch (error) {
            console.log(error)
        }
    }
    async updatePost(slug, { title, content, featuredImg, status }) {
        try {
            return await this.dataBases.updateDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,

                {
                    title,
                    content,
                    featuredImg,
                    statusbar,
                }
            )
        }
        catch (error) {
            console.log(error)
        }
    }
    async deletePost(slug) {
        try {
            await this.dataBases.deleteDocument(conf.appWriteDataBaseId
                ,
                conf.appWriteCollectionId,
                slug
            )
            return true
        }
        catch (error) {
            console.log(error)
            return false
        }
    }
    async getPost(slug) {
        try {
            return await this.dataBases.getDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug
            )
        }
        catch (error) {
            console.log(error)
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.dataBases.listDocuments(      
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                queries,
            )
        }
        catch (error) {
            console.log(error)
            return false
        }
    }
    
}

const service = new Service()
export default service