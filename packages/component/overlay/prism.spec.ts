import { shallowMount } from '@vue/test-utils'
import prism from './prism.vue'
import { addPrism } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addPrism: jest.fn(() => ({
        prism: overlay,
        removeOverlay: jest.fn(),
        overallView: jest.fn()
    }))
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(prism, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            points: [],
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        points: [],
        altitude: 5000,
        topFillColor: '#5679ea',
        topFillOpacity: 0.5,
        sideFillColor: '#5679ea',
        sideFillOpacity: 0.9,
        enableMassClear: true,
        overallView: false,
        show: true,
        init: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addPrism).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})