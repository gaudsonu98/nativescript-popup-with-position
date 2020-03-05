const CreateViewModel = require("./main-view-model");
var createViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    createViewModel = new CreateViewModel();
    page.bindingContext = createViewModel;
}
exports.onNavigatingTo = onNavigatingTo;

exports.showPopup = function(args) {
    createViewModel.showPopup(args);
};
