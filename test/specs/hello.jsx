var Hello = moquire('hello');

Describe(function(){
  It(function shouldBeA_Component(){
    var packageJSON = moquire('..', 'package.json');
    var shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Hello {...packageJSON} />);
    var helloRenderResult = shallowRenderer.getRenderOutput();
    log(helloRenderResult);
    expect(helloRenderResult._store.props.children).to.equal(packageJSON.name);
  });
});
