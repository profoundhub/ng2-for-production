exports.translate = function(load) {
  if (this.builder && this.transpiler) {
    load.metadata.format = 'esm';
    return 'export var __useDefault = true; export default ' + JSON.stringify(load.source) + ';';
  }

  load.metadata.format = 'amd';
  return 'define(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
}
