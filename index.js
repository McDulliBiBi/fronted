'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        //只依赖了浏览器原生支持的特性。这就是为什么我们使用了 JavaScript 函数调用来告诉 React 要显示什么
       /* return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
        'Like'
    );*/
    //React 还提供了一种用 JSX 来代替实现的选择
        return (
            <button onClick={() => this.setState({ liked: true })}>
        Like
        </button>
    );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);