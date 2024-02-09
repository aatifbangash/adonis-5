import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {

    public async index({ view }: HttpContextContract) {
        const posts = await Post.find();
        console.log(posts)
        // return response.status(200).send(posts);
        return view.render('welcome', {
            posts: posts
        })
    }

    public async create({ response }: HttpContextContract) {
        const post = await Post.create({
            title: "testing",
            content: "abc testing"
        });
        return response.json(post);
    }
}
