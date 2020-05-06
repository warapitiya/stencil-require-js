import { Component, h, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  componentDidLoad() {
    console.log('>>> stencil component did load');
    console.log('>>> running the promise');
    try {
      new Promise((resolve) => {
        resolve(50);
      })
        .then((value) => console.log('>>> promise value:', value))
        .catch((error) => console.error(error))
    } catch (e) {
      console.error(e);
    }
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
