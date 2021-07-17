// const styleMap = {
//     CODE: {
//         backgroundColor: 'none',
//         fontFamily: 'monospace',
//         overflowWrap: 'break-word'
//     }
// };

const styleMap = {
    color: {},
    bgcolor: {},
    fontSize: {},
    fontFamily: {},
    CODE: {
        fontFamily: 'monospace',
        wordWrap: 'break-word',
        background: '#f1f1f1',
        borderRadius: 3,
        padding: '1px 3px'
    },
    SUPERSCRIPT: {
        fontSize: 11,
        position: 'relative',
        top: -8,
        display: 'inline-flex'
    },
    SUBSCRIPT: {
        fontSize: 11,
        position: 'relative',
        bottom: -8,
        display: 'inline-flex'
    }
};

export default styleMap;
