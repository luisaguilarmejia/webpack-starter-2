const HtmlWebpack    = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',

    output:{
        clean: true
    },

    module: {
        rules: [
            {
                // expresion regular, si encutra un archivo html, mandamosllamar el loader
                test:   /\.html$/,
                loader: 'html-loader',
                options:{
                    sources: false
                }
            },
            {
                // Para que se aplique a todos los estilos con ending css.
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader' , 'css-loader'],
            },
            {
              test: /styles.css$/,
              use: [MiniCssExtract.loader, 'css-loader']
              
            },
            {
                // Para cualquier imagen (expresion regular)
                test: /\.(png|gpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization:{

    },

    plugins:[
        new HtmlWebpack({
         title: 'Mi Webpack App',
        //  filename: 'index.html'  esto es opcional, porque por defaul deja index.html
         template: './src/index.html',
         }),

         new MiniCssExtract({
             //para que use el mismo nombre del archivo
            //  filename: '[name].[fullhash].css',
             filename: '[name].css',
             ignoreOrder: false,
         }),

         new CopyPlugin({
             patterns:[
                 {from: 'src/assets', to: 'assets'}
             ]    
            })
    ],

}
