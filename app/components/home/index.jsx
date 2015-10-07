import React, { Component } from 'react';
import Mui, { FloatingActionButton, Styles, FontIcon } from 'material-ui';
const { Colors } = Mui.Styles;
import NoteAddIcon from '../icons/note-add';
import SearchIcon from '../icons/search';
import SettingsIcon from '../icons/settings';
import { Cards } from '../../collections';
import { createCard } from '../../actions/cards-actions';
import { connect } from 'react-redux';

@connect(state => ({ routerState: state.router }))
export default class Index extends Component {

  getStyles() {
    return {
      headerStyle: {
        backgroundColor: Colors.cyan500,
        overflow: 'hidden',
        paddingTop: '3em'
      },
      headerWrapStyle: {
        height: '12em'
      },
      floatingActionsWrapperStyle: {
        paddingRight: '3em',
        float: 'right'
      },
      floatingActionsStyle: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        transform: 'translate(0, -30px)',
        WebkitTransform: 'translate(0, -30px)'
      }
    }
  }

  onNewCardClick() {
		this.props.dispatch(createCard());
  }

	render() {

		const styles = this.getStyles();

		return (
			<div>
				<div style={styles.headerStyle}>
					<div className="wrap" style={styles.headerWrapStyle}>
						<h1>Inventaire</h1>
					</div>
				</div>

				<div style={styles.floatingActionsStyle}>
					<div className="wrap">
						<div style={styles.floatingActionsWrapperStyle}>
							<FloatingActionButton
								style={{marginRight: '3em'}}
								onClick={this.onNewCardClick.bind(this)}>
								<NoteAddIcon />
							</FloatingActionButton>
							<FloatingActionButton
								style={{marginRight: '.5em'}}
								secondary={true}>
								<SearchIcon />
							</FloatingActionButton>
							<FloatingActionButton
								secondary={true}>
								<SettingsIcon />
							</FloatingActionButton>
						</div>
					</div>
				</div>

				<div className="wrap" style={{marginTop: '6em'}}>
					<div className="row">
						<div className="col-xs-12 col-sm-6">
						</div>
						<div className="col-xs-12 col-sm-6">
						</div>
					</div>
				</div>
			</div>
		);
	}
}
