module.exports={
    // configureWebpack 表示配置我们的webpack.config 文件
    configureWebpack:{
        //解决路径的一些问题
        resolve:{
            // 设置后路径的后缀 可以不写
            extensions:[],
            // 配置别名
            alias:{
                // 默认已经配置好的路径别名 '@':'src'
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}
