import { shallowMount } from '@vue/test-utils'
import cityboundary from './city-boundary.vue'
import { initBoundariesResult, addCityBoundary } from '../../lib/overlay'
import { nextTick } from 'vue'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    initBoundariesResult: jest.fn(() => Promise.resolve({
        boundary: null,
        rs: null
    })),
    addCityBoundary: jest.fn(() => ({
        boundary: {},
        overlay: overlay,
        removeOverlay: jest.fn(),
        overallView: jest.fn(),
    }))
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(cityboundary, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            firstLoad: true,
            name: '北京市',
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        name: '北京市',
        overallView: false,
        firstLoad: true,
        show: true,
        onReady: onReady
    })
    expect(initBoundariesResult).toHaveBeenCalledTimes(1)
    await nextTick()
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addCityBoundary).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj?.boundary).toBeDefined()
    expect(readyEvent[0][0].bmobj?.removeOverlay).toBeDefined()
    expect(readyEvent[0][0].bmobj?.overallView).toBeDefined()
    expect(readyEvent[0][0].bmobj).toHaveProperty('overlay', overlay)

})