const Observable = require("tns-core-modules/data/observable").Observable;
const Label = require("tns-core-modules/ui/label").Label;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout")
    .StackLayout;
const GridLayout = require("tns-core-modules/ui/layouts/grid-layout")
    .GridLayout;
const Image = require("tns-core-modules/ui/Image").Image;
const ScrollView = require("tns-core-modules/ui/scroll-view").ScrollView;
const ListView = require("tns-core-modules/ui/list-view");
const Button = require("tns-core-modules/ui/button").Button;
const Popup = require("nativescript-popup-with-position").Popup;
var Toast = require("nativescript-toast");
var popup;

function CreateViewModel() {
    var viewModel = new Observable();
    viewModel.showPopup = function(args) {

        const gridLayout = new GridLayout();
        gridLayout.rows = "*";
        gridLayout.margin = "10px";
        gridLayout.columns = "*,*,*,*,*";

        const likeImage = new Image();
        likeImage.col = "0";
        likeImage.reactionType = "like";
        likeImage.src = "res://like";
        likeImage.borderRadius = "25dp";
        likeImage.on("tap", args1 => {
            EmojiTap(args1);
        });
        gridLayout.addChild(likeImage);

        const celebrateImage = new Image();
        celebrateImage.col = "1";
        celebrateImage.reactionType = "celebrate";
        celebrateImage.src = "res://celebrate";
        celebrateImage.borderRadius = "25dp";
        celebrateImage.on("tap", args1 => {
            EmojiTap(args1);
        });
        gridLayout.addChild(celebrateImage);

        const loveImage = new Image();
        loveImage.col = "2";
        loveImage.reactionType = "love";
        loveImage.src = "res://love";
        loveImage.borderRadius = "25dp";
        loveImage.on("tap", args1 => {
            EmojiTap(args1);
        });
        gridLayout.addChild(loveImage);

        const insightfulImage = new Image();
        insightfulImage.col = "3";
        insightfulImage.reactionType = "insightful";
        insightfulImage.src = "res://insightful";
        insightfulImage.borderRadius = "25dp";
        insightfulImage.on("tap", args1 => {
            EmojiTap(args1);
        });
        gridLayout.addChild(insightfulImage);

        const curiousImage = new Image();
        curiousImage.col = "4";
        curiousImage.reactionType = "curious";
        curiousImage.src = "res://curious";
        curiousImage.borderRadius = "25dp";
        curiousImage.on("tap", args1 => {
            EmojiTap(args1);
        });
        gridLayout.addChild(curiousImage);

        const sv = new ScrollView();
        sv.content = gridLayout;

        viewModel.showPopover(args.object.getViewById("popupBtn"), sv);
    };

    viewModel.showPopover = function(source, view) {
        var xpos = 0;
        var ypos = -350;
        popup = new Popup({
            height: 10,
            width: 80,
            unit: "%",
            elevation: 10,
            borderRadius: 80
        });
        popup.showPopup(source, view, xpos, ypos).then(data => {
            console.log(data);
        });
    };
    return viewModel;
}

module.exports = CreateViewModel;

function EmojiTap(args) {
    console.log("reaction button tapped");
    console.log(args.object.reactionType);
    Toast.makeText(args.object.reactionType).show();
}
