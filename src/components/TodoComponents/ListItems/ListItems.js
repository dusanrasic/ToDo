import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/Item';
import { Separator } from '../../Separator/Separator';

import './ListItems.scss';

const CLASS = 'el-ListItems';

export default class ListItems extends Component {
	static propTypes = {
		data: PropTypes.array,
	};

	static defaultProps = {
		data: [],
	};

	renderList = () => {
		const { data } = this.props;
		const noData = data && !data.length;

		if (noData) {
			return null;
		}

		return data.map(this.renderListItem);
	};

	renderListItem = (item) => {
		if (!item) {
			return null;
		}

		return (
			<div key={item.id}>
				<Item item={item} />
				<Separator />
			</div>
		);
	};

	render() {
		return <div className={CLASS}>{this.renderList()}</div>;
	}
}
