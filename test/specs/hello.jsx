var Hello = moquire('hello');

Describe(function(){
  It(function shouldBeA_Component(){
    var renderedDocument = TestUtils.renderIntoDocument(<Hello/>);
    var helloComponent = TestUtils.scryRenderedComponentsWithType(renderedDocument, Hello);
    expect(TestUtils.isDOMComponent(helloComponent)).to.be.true;
  });
});
