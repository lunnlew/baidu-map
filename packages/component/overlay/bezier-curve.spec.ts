import { shallowMount } from '@vue/test-utils'
import beziercurve from './bezier-curve.vue'
import { addBezierCurve } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addBezierCurve: jest.fn(() => {
        return {
            bc: overlay,
            removeOverlay: jest.fn(),
            overallView: jest.fn(),
        }
    })
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(beziercurve, {
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
            controlPoints: [
                [
                    {
                        lng: 0,
                        lat: 0,
                    },
                    {
                        lng: 0,
                        lat: 0,
                    },
                ],
                [
                    {
                        lng: 0,
                        lat: 0,
                    },
                ],
            ],
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        points: [],
        controlPoints: [
            [
                {
                    lng: 0,
                    lat: 0,
                },
                {
                    lng: 0,
                    lat: 0,
                },
            ],
            [
                {
                    lng: 0,
                    lat: 0,
                },
            ],
        ],
        overallView: false,
        show: true,
        "enableMassClear": true,
        "strokeColor": "#FF0000",
        "strokeOpacity": 0.8,
        "strokeStyle": "solid",
        "strokeWeight": 2,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addBezierCurve).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})