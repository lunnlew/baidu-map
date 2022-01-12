declare namespace BMapGL {
    /**
     * 此类表示LocalCity的可选参数。它没有构造函数，但可通过对象字面量表示。
     */
    interface LocalCityOptions {
        /**
         * 结果呈现设置，当给定map参数时，改地图将自动将视野定位到当前城市
         */
        renderOptions: RenderOptions
    }

    /**
     * 此类表示LocalCity的定位结果。
     */
    interface LocalCityResult {
        /**
         * 城市所在中心点
         */
        center: Point
        /**
         * 展示当前城市的最佳地图级别，如果您在使用此对象时提供了map实例，则地图级别将根据您提供的地图大小进行调整
         */
        level: number
        /**
         * 城市名称
         */
        name: string
    }

    /**
     * 此类用于获取用户所在的城市位置信息。(根据用户IP自动定位到城市)
     */
    class LocalCity {
        /**
         * 创建一个获取本地城市位置的实例
         * @param opts
         */
        constructor(opts: LocalCityOptions)
        /**
         * 当获取城市信息后，回调函数会被调用，其参数为类型为LocalCityResult对象
         */
        get(callback: Function): void
    }
}