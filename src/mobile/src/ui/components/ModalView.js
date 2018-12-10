import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Styling } from 'ui/theme/general';
import { width, height } from 'libs/dimensions';
import { isIPhoneX } from 'libs/device';
import DualFooterButtons from './DualFooterButtons';
import SingleFooterButton from './SingleFooterButton';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width,
        justifyContent: 'flex-end',
        height,
        flex: isIPhoneX ? 0 : 1,
    },
    modalContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width,
        height: height - Styling.topbarHeight,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export class ModalViewComponent extends PureComponent {
    static propTypes = {
        /** @ignore */
        theme: PropTypes.object.isRequired,
        /** Modal content */
        children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        /** Determines whether to display the topbar */
        displayTopBar: PropTypes.bool,
        /** Determines whether to display dual footer buttons */
        dualButtons: PropTypes.bool,
        /** Left button text for dual buttons */
        leftButtonText: PropTypes.string,
        /** Right button text for dual buttons */
        rightButtonText: PropTypes.string,
        /** Triggered on left button for press dual footer buttons */
        onLeftButtonPress: PropTypes.func,
        /** Triggered on right button press for dual footer buttons */
        onRightButtonPress: PropTypes.func,
        /** Button text for single footer button */
        buttonText: PropTypes.string,
        /** Triggered on button press for single footer button */
        onButtonPress: PropTypes.func,
    };

    static defaultProps = {
        displayTopBar: false,
        dualButtons: false,
        leftButtonText: '',
        rightButtonText: '',
        onLeftButtonPress: () => {},
        onRightButtonPress: () => {},
        onButtonPress: () => {},
        buttonText: '',
    };

    render() {
        const {
            theme: { body },
            children,
            displayTopBar,
            dualButtons,
            leftButtonText,
            rightButtonText,
            onLeftButtonPress,
            onRightButtonPress,
            buttonText,
            onButtonPress,
        } = this.props;

        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.modalContainer,
                        { backgroundColor: body.bg },
                        displayTopBar ? { height: height - Styling.topbarHeight } : { flex: 1 },
                    ]}
                >
                    <View style={styles.modalContent}>{children}</View>
                    {(dualButtons && (
                        <DualFooterButtons
                            onLeftButtonPress={() => onLeftButtonPress()}
                            onRightButtonPress={() => onRightButtonPress()}
                            leftButtonText={leftButtonText}
                            rightButtonText={rightButtonText}
                        />
                    )) || <SingleFooterButton onButtonPress={() => onButtonPress()} buttonText={buttonText} />}
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    theme: state.settings.theme,
});

export default connect(mapStateToProps)(ModalViewComponent);