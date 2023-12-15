module.exports = (context) => {
    console.log('Jake context', context);
    const str = context.payload.comment.body;
    const wsStr = str.replace('/prefix', '').trim().split(',');
    return wsStr.join(' ');
}