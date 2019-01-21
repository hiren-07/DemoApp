import {Platform, Dimensions} from 'react-native'

const WINDOW = Dimensions.get('window')
const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet'
const iPhoneX = Platform.OS === 'ios' && WINDOW.height === 812
const iPhone5 = Platform.OS === 'ios' && WINDOW.height === 568

const smartScale = value => {
    const height =
        Platform.OS === 'ios' ? (iPhoneX ? WINDOW.height - 78 : WINDOW.height) : WINDOW.height - 24
    if (deviceType == 'phone') {
        return (value * height) / 667
    }
    return (value * height) / 667
}

const screenPaddingValue = iPhoneX ? smartScale(17) : smartScale(26)

const scalarSpace = iPhoneX ? smartScale(11) : smartScale(13)

const getWidthByColumn = (column = 1) => {
    const totalPixel = WINDOW.width
    const totalSpace = screenPaddingValue * 2 + scalarSpace * (column - 1)
    return (totalPixel - totalSpace) / column
}

const screenChatPaddingValue = iPhoneX ? smartScale(34) : smartScale(26)

export default {
    countPixelRatio: defaultValue => smartScale(defaultValue),
    height: WINDOW.height,
    width: WINDOW.width,
    fontSizeH0: smartScale(deviceType == 'phone' ? 30 : 40),
    fontSizeH1: smartScale(deviceType == 'phone' ? 26 : 36),
    fontSizeH1_2: smartScale(deviceType == 'phone' ? 24 : 32),
    fontSizeH2: smartScale(deviceType == 'phone' ? 20 : 26),
    fontSizeH2_3: smartScale(deviceType == 'phone' ? 18 : 22),
    fontSizeH3: smartScale(deviceType == 'phone' ? 15 : 18),
    fontSizeH3_4: smartScale(deviceType == 'phone' ? 12 : 14),
    fontSizeH4: smartScale(deviceType == 'phone' ? 10 : 12),
    fontSizeParagraph: smartScale(deviceType == 'phone' ? 13 : 15),
    headerHeight:
        Platform.OS === 'ios' ? smartScale(72) : smartScale(52),
    appBackground: '#f8f8fb',
    headerTextColor: '#FA8224',
    disableIconColor: '#444',
    isIphone: Platform.OS === 'ios',
    isIphoneX: iPhoneX,
    cardStyle: {
        height: smartScale(48),
        backgroundColor: '#fff',
        borderRadius: 2,
        shadowColor: '#3A676F',
        shadowOpacity: 1.0,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'rgba(58,103,111,0.5)',
        shadowRadius: 5,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        elevation: Platform.OS === 'ios' ? 5 : 10,
    },
}
