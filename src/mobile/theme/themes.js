import tinycolor from 'tinycolor2';

const themes = {
    Default: {
        backgroundColor: `#1a373e`,
        barColor: '#191c2b',
        ctaColor: `#f6d001`,
        positiveColor: `#9DFFAF`,
        negativeColor: `#F7D002`,
        extraColor: `#88D4FF`,
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: '#1a373e',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColorPrimary: '#FFA25B',
        chartLineColorSecondary: '#FFA25B',
    },
    Contemporary: {
        backgroundColor: `#EAEDF3`,
        barColor: `#181C2B`,
        ctaColor: `#862888`,
        positiveColor: `#007353`,
        negativeColor: `#DA8F0F`,
        extraColor: `#007353`,
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'black',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColorPrimary: '#6439A9',
        chartLineColorSecondary: '#6439A9',
    },
    Grey: {
        backgroundColor: `#313131`,
        barColor: `#1a1a1a`,
        ctaColor: `#009f3f`,
        positiveColor: `#9DFFAF`,
        negativeColor: `#F7D002`,
        extraColor: `#88D4FF`,
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColorPrimary: '#FFA25B',
        chartLineColorSecondary: '#FFA25B',
    },
    Blue: {
        backgroundColor: `#20303f`,
        barColor: `#121c24`,
        ctaColor: `#009f3f`,
        positiveColor: `#9DFFAF`,
        negativeColor: `#F7D002`,
        extraColor: `#88D4FF`,
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColorPrimary: '#FFA25B',
        chartLineColorSecondary: '#FFA25B',
    },
    Light: {
        backgroundColor: `white`,
        barColor: `white`,
        ctaColor: `white`,
        positiveColor: `black`,
        negativeColor: `black`,
        extraColor: `black`,
        secondaryBarColor: 'black',
        secondaryBackgroundColor: 'black',
        secondaryCtaColor: 'black',
        ctaBorderColor: 'black',
        pendingColor: '#f75602',
        chartLineColorPrimary: 'black',
        chartLineColorSecondary: 'black',
    },
    Dark: {
        backgroundColor: `black`,
        barColor: `black`,
        ctaColor: `black`,
        positiveColor: `#9DFFAF`,
        negativeColor: `#F7D002`,
        extraColor: `#88D4FF`,
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'white',
        pendingColor: '#f75602',
        chartLineColorPrimary: 'white',
        chartLineColorSecondary: 'white',
    },
};
/* Simple: {
        backgroundColor: tinycolor(`#D9D9D9`).toHsl(),
        barColor: tinycolor(`#1A1A1A`).toHsl(),
        ctaColor: tinycolor(`#009f3f`).toHsl(),
        positiveColor: tinycolor(`#9DFFAF`).toHsl(),
        negativeColor: tinycolor(`#57A2CB`).toHsl(),
        extraColor: tinycolor(`#88D4FF`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'black',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColor: 'black',
    }, */
/* Custom: {
        backgroundColor: tinycolor(`#1a373e`).toHsl(),
        barColor: tinycolor(`#0b282f`).toHsl(),
        ctaColor: tinycolor(`#009f3f`).toHsl(),
        positiveColor: tinycolor(`#9DFFAF`).toHsl(),
        negativeColor: tinycolor(`#F7D002`).toHsl(),
        extraColor: tinycolor(`#88D4FF`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColor: 'white',
    }, */

export default {
    themes,
};
