import React, { Component, Fragment } from 'react';
import cat from './cat.png';
import './style.scss';

class Article extends Component {
  state = {
    hover: false
  };

  articleRef = React.createRef();

  onMouseEnter = evt => {
    if (this.props.data.disabled) return;
    this.setState({ hover: true });
    this.articleRef.current.classList.add('article__wrapper--hover');
  };

  onMouseLeave = evt => {
    if (this.props.data.disabled) return;
    this.setState({ hover: false });
    this.articleRef.current.classList.remove('article__wrapper--hover');
  };

  onClick = evt => {
    if (this.props.data.disabled) return;
    this.setState({ hover: false});
    this.props.onSelectionChange(this.props.data.id);
    this.articleRef.current.classList.toggle('article__wrapper--selected');
    this.articleRef.current.classList.remove('article__wrapper--hover');
  };

  renderList = list => {
    return list.map((item, index) => {
      const it = item.split(' ').map((substr, index) => {
        return isNaN(+substr) ? substr + ' ' : <span className='bold' key={index}>{substr} </span>
      });
      return <li key={index} className="article__list-item">{it}</li>
    });
  };

  renderTagline = () => {
    const { hover } = this.state;
    const { selected } = this.props.data;
    const text = selected && hover ? 'Котэ не одобряет?' : 'Сказочное заморское яство';
    return <p className='article__tagline'>{text}</p>
  }

  renderAfterline = () => {
    const { afterline, disabled } = this.props.data;
    if (disabled) return afterline.disabled;
    const { selected } = this.props.data;
    return selected ? afterline.selected : <Fragment>Чего сидишь, порадуй котэ, {<span tabIndex='0' className='article__afterline-link' onClick={this.onClick}>купи</span>}.</Fragment>
  }

  render() {
    const { title, amount, about, disabled } = this.props.data;
    const temp = disabled ? `article__wrapper--disabled` : ``;

    return (
      <article
        className={`article__wrapper ${temp}`}
        ref={this.articleRef}
      >
        <div className="article__content"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        >
          <div className="article__background">
            <div className="article__description">
              {this.renderTagline()}
              <h3 className="article__title">{title.main}</h3>
              <b className="article__subtitle">{title.sub}</b>
              <ul className="article__list">{this.renderList(about)}</ul>
            </div>
            <div className="article__img-wrapper">
              <img alt="кот" src={cat} className="article__img" />
            </div>
          </div>
          <div className="article__amount">
            <span className="article__amount-count">{amount.count}</span>
            <span className="article__amount-unit">{amount.unit}</span>
          </div>
        </div>
        <p className="article__afterline">{this.renderAfterline()}</p>
      </article>
    );
  }
}

export default Article;
