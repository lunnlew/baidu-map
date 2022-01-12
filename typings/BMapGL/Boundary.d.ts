declare namespace BMapGL {
    /**
     * 此类表示一个行政区域的边界。
     */
    class Boundary {
        /**
         * 建行政区域搜索的对象实例
         */
        constructor()
        /**
         * 返回行政区域的边界。 name: 查询省、直辖市、地级市、或县的名称。 callback:执行查询后，数据返回到客户端的回调函数，数据以回调函数的参数形式返回。返回结果是一个数组，数据格式如下： arr[0] = "x1, y1; x2, y2; x3, y3; ..." arr[1] = "x1, y1; x2, y2; x3, y3; ..." arr[2] = "x1, y1; x2, y2; ..." … 否则回调函数的参数为null
         * @param name
         * @param callback
         */
        get(name: string, callback: Function): void
    }
}