This is the client side for learning how to create chrome extension and scraping web.
Im going to use react and vite.


What is vite?
Before I dive in into what is vite, I'd like to tell you about some stuff that bothers a lot of engineers when it comes to build web applictions.
1. When the builder builds things, they want a fast loop that would give them the green light to either move on to the next feature or fix it. 
The faster the feedback from the loop the faster I develop and fix things. What provide this loop is module bundler like Webpack.
Webpack is good but appearntely not as fast as Vite. Webpack takes longer to run the development server to recompile the code.
[Slow Build Times]

2. Some builders hate to learn stuff every week, which I got it, becuase sometimes it becomes fkn too much.
And I dont think they hate to learn things, they just hate the curve of learning that makes them wait maybe big time to understand something to start building with, esp with software ngineer where most of them the Impostor syndrome never left them.
So tools like webpack requires a lot of configuration(Configuration is my nightmare)


Simpy put, Vite is solving the feedback speed during development using tool callled esbuild to bundle the files.
And the resaon that it fast because the esbuild was built by Go 



Dev server: provides rich enhancement over native ES module 
***
Native Es module: Modren module systyem that is built into the js.
Help with import/export. Eliminate unused code . Work on both the server the browser
***
Bundle your code for production



#### Now, let's setup the project

1.  Initiate a project 
```bash
npm create vite@latest . <Or the name of your application> -- --template react-ts
```
2.  Install Dependencies
```bash
npm install
```
3. Run the app
```bash
npm run dev
```

- Go to the localhost that Vite provides and you should see the website runs


#### Prepare the project for Chrome Extention
1. Configure Vite for Chrome extenstion in `vite.config.js`
2. Setup the `manifest.json` in the public folder create the the file `manifest.json`
3. Create a content script in `src/content.ts`