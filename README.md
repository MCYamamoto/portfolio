# portfolio
モルトカリーナ山本ポートフォリオ



## 環境構築



<pre>
    yarn install
    yarn build
</pre>



### <注意点>

node_module/resolve-url-loader/index.js

<pre>
      var options = Object.assign(
    {
      sourceMap: loader.sourceMap,
      engine   : 'postcss',
      silent   : false,
      absolute : false,
      keepQuery: false,
      removeCR : true,  //<--- 元々はfalseだったが、trueにしないとbuildエラーになった

</pre>







