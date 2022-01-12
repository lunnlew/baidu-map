declare namespace BMapGL {
    /**
     * Autocomplete是结果提示、自动完成类。
     */
    class Autocomplete {
        /**
         * 	创建自动完成的实例
         * @param options
         */
        constructor(options: AutocompleteOptions)
        /**
         * 显示提示列表
         */
        show(): void
        /**
         * 隐藏提示列表
         */
        hide(): void
        /**
         * 修改请求数据类型。types定义方法详见AutocompleteOptions
         * @param types
         */
        setTypes(types: Array<string>): void
        /**
         * 设置检索区域
         * @param location
         */
        setLocation(location: String | Map | Point): void
        /**
         * 发起某个关键字的提示请求，会引起onSearchComplete的回调
         * @param keywords
         */
        search(keywords: string): void
        /**
         * 获取结果列表
         */
        getResults(): AutocompleteResult
        /**
         * 	设置绑定的input控件的值，且不会出现下拉列表
         * @param keyword
         */
        setInputValue(keyword: string): void
        /**
         * 销毁自动完成对象
         */
        dispose(): void
        /**
         * 事件处理函数
         * @param event
         * @param listener
         */
        on<T extends 'confirm' | 'highlight'>(
            event: T,
            listener: (type: any, target: any, fromitem: any, toitem: any) => void
        ): this
    }

    /**
     * 本类是Autocomplete类的可选参数对象
     */
    interface AutocompleteOptions {
        /**
         * 返回数据类型。两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条
         */
        types: Array<String>
        /**
         * 在input框中输入字符后，发起列表检索，完成后的回调函数。 参数：AutocompleteResult
         */
        onSearchComplete: Function
        /**
         * 文本输入框元素或其id
         */
        input: String | HTMLElement
    }

    /**
     * 自动完成检索完成回调函数的参数对象
     */
    interface AutocompleteResult {
        /**
         * 检索关键字
         */
        keyword: String
        /**
         * 结果数组
         * @param i
         */
        getPoi(i: Number): AutocompleteResultPoi
        /**
         * 结果总数
         */
        getNumPois(): Number
    }

    /**
     * 自动完成类获取的单个POI点的信息
     */
    interface AutocompleteResultPoi {
        /**
         * 省名
         */
        province: String
        /**
         * 城市名
         */
        City: String
        /**
         * 区县名称
         */
        district: String
        /**
         * 街道名称
         */
        street: String
        /**
         * 门牌号码
         */
        streetNumber: String
        /**
         * 商户名
         */
        business: String
    }
}