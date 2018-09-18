import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from 'view/global/components';

class ListView extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      data,
      renderItem,
      renderSeparatorComponent,
      renderEmptyComponent,
      renderHeaderComponent,
      renderFooterComponent,
      horizontal,
      style,
      renderLastSeparator,
      className,
      setKey,
    } = this.props;
    if (!data) return null;
    if (data.length === 0 && renderEmptyComponent) return renderEmptyComponent();
    return (
      <View row={horizontal} style={style} className={className}>
        {renderHeaderComponent && renderHeaderComponent()}
        {data.map((item, i) => {
          return (
            <div key={setKey ? setKey(item, i) : i}>
              <View row={horizontal}>
                {renderItem(item, i)}
                {renderSeparatorComponent &&
                  (i !== data.length - 1 || renderLastSeparator) &&
                  renderSeparatorComponent(item, i)}
              </View>
            </div>
          );
        })}
        {renderFooterComponent && renderFooterComponent()}
      </View>
    );
  }
}

export default Radium(ListView);
