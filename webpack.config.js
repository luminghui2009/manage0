let path=require("path");
let webpack=require("webpack");
let HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./public/index.js",
    output:{
        filename:"[name].js",
        path:path.resolve("dist")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            },
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.(jpg|png|svg|eot|woff|woff2)$/,use:"url-loader"}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ],
    devtool:"source-map",
    devServer:{
        proxy:{
            "/api":"http://localhost:3000"
        }
    }
};