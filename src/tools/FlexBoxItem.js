import React from "react";
import PropTypes, {number, string} from 'prop-types';
import {Box} from "@material-ui/core";

export default function FlexBoxItem(props) {

    const {alignSelf, alignSelfSafety, justifySelf, justifySelfSafety} = props;
    const alignSelfSafetyOff = alignSelfSafety === 'off' || !['start', 'flex-start', 'self-start', 'end', 'flex-end', 'self-end', 'center'].includes(alignSelf);
    const justifySelfSafetyOff = justifySelfSafety === 'off' || !['start', 'flex-start', 'self-start', 'end', 'flex-end', 'self-end', 'center', 'left', 'right'].includes(justifySelf);
    const computedProps = {
        ...props,
        alignSelf: alignSelfSafetyOff ? alignSelf : `${alignSelfSafety} ${alignSelf}`,
        justifySelf: justifySelfSafetyOff ? justifySelf : `${justifySelfSafety} ${justifySelf}`
    };

    return (
        <Box {...computedProps}>
            {props.children}
        </Box>
    );

}

FlexBoxItem.propTypes = {
    ...Box.propTypes,
    order: PropTypes.number,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    flexBasis: PropTypes.oneOfType([number, string]),
    alignSelf: PropTypes.oneOf(['stretch', 'flex-start', 'start', 'self-start', 'flex-end', 'end', 'self-end', 'center', 'baseline', 'first baseline', 'last baseline', 'normal', 'auto']),
    alignSelfSafety: PropTypes.oneOf(['safe', 'unsafe', 'off']),
    justifySelf: PropTypes.oneOf(['stretch', 'flex-start', 'start', 'self-start', 'flex-end', 'end', 'self-end', 'center', 'baseline', 'first baseline', 'last baseline', 'normal', 'left', 'right', 'auto']),
    justifySelfSafety: PropTypes.oneOf(['safe', 'unsafe', 'off'])
};

FlexBoxItem.defaultProps = {
    flexBasis: '100%',
    alignSelfSafety: 'safe',
    justifySelfSafety: 'safe'
};