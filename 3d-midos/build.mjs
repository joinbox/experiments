import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
    entryPoints: ['js/scripts.js', 'js/modelviewer.js'],
    bundle: true,
    outdir: 'dist',
  });
  
  await ctx.watch();