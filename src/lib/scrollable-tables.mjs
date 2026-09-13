// Keep Markdown tables readable without widening the page on small screens.
export default {
  name: 'scrollable-tables',
  element: {
    filter: ['table'],
    visit(node, context) {
      context.wrapNode(node, {
        type: 'element', tagName: 'div',
        properties: { className: ['table-scroll'], tabIndex: 0, role: 'region', ariaLabel: 'Scrollable table' },
        children: []
      });
    }
  }
};
