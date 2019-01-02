import React, { Component } from 'react';

export default class EditTemplate extends Component {


    
    render() {
        return (
            
            <div className="content-wrapper">
                
                <section className="content-header">
                <h1>
                    Edit Template
                    <small>Form</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Edit Template</li>
                </ol>
                </section>
                
                <section className="content">
                
                <div className="row">
                    
                    <section className="col-lg-12">
                    
                    <div className="box box-primary">
                        <div className="box-header">
                        <i className="ion ion-clipboard"></i>
                        <h3 className="box-title">Edit Template</h3>
                        </div>
                        
                        <div className="box-body">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="box box-solid">
                                <div className="box-header">
                                <i className="fa fa-list"></i>
                                <h3 className="box-title">Template Properties</h3>
                                <div className="box-tools pull-right">
                                    <button type="button" className="btn bg-aqua btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                </div>
                                <div className="box-body border-radius-none">
                                <div className="row">
                                    <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="inputEmail3" className="control-label">Template Name</label>
                                        <input type="email" className="form-control" id="inputEmail3" placeholder="name">
                                    </div>
                                    <div className="form-group">
                                        <label>Unit</label>
                                        <select className="form-control">
                                        <option>cm</option>
                                        <option>px</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="inputWidth" className="control-label">Width</label>
                                        <div>
                                        <input id="inputWidth" type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                            data-slider-step="5" data-slider-value="100"
                                            data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Height</label>
                                        <div>
                                        <input type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                            data-slider-step="5" data-slider-value="100"
                                            data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-3">
                                    <div className="form-group">
                                        <label>For Item</label>
                                        <select className="form-control">
                                        <option>cop</option>
                                        <option>other item</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>tags</label>
                                        <select className="form-control select2" multiple="multiple" data-placeholder="Select Unit"
                                        style="width: 100%;">
                                        <option>clasic</option>
                                        <option>modern</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            </div>
                            <div className="col-md-3 connectedSortable ui-sortable">
                            <div className="box box-solid">
                                <div className="box-header">
                                <i className="fa fa-files-o"></i>
                                <h3 className="box-title">Layouts</h3>
                                <div className="box-tools pull-right">
                                    <button type="button" className="btn bg-aqua btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                </div>
                                <div className="box-body border-radius-none">
                                <div>
                                    
                                    <ul className="todo-list">
                                    <li layoutType="image"  className="layout-item">
                                        
                                        <span className="handle">
                                        <i className="fa fa-reorder"></i>
                                        </span>
                                        
                                        <i className="fa fa-eye"></i>
                                        
                                        <span className="product-img">
                                        <img src="https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg" alt="Product Image"/>
                                        </span>
                                        
                                        
                                        <div className="tools">
                                        <i className="fa fa-trash-o"></i>
                                        </div>
                                        <div className="text">image-stam.png</div>
                                    </li>
                                    <li layoutType="image"  className="layout-item active-layout">
                                        
                                        <span className="handle">
                                        <i className="fa fa-reorder"></i>
                                        </span>
                                        
                                        <i className="fa fa-eye"></i>
                                        
                                        <span className="product-img">
                                        <img src="https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg" alt="Product Image"/>
                                        </span>
                                        
                                        
                                        <div className="tools">
                                        <i className="fa fa-trash-o"></i>
                                        </div>
                                        <div className="text">default-50x50.gif</div>
                                    </li>
                                    <li layoutType="text" className="layout-item">
                                        
                                        <span className="handle">
                                        <i className="fa fa-reorder"></i>
                                        </span>
                                        
                                        <i className="fa fa-eye"></i>
                                        
                                        <i className="fa fa-font"></i>
                                        
                                        
                                        <div className="tools">
                                        <i className="fa fa-trash-o"></i>
                                        </div>
                                        <div className="text">This is the text</div>
                                    </li>
                                    <li layoutType="shape" className="layout-item">
                                        
                                        <span className="handle">
                                        <i className="fa fa-reorder"></i>
                                        </span>
                                        
                                        <i className="fa fa-eye"></i>
                                        
                                        <i className="fa fa-cubes"></i>
                                        
                                        
                                        <div className="tools">
                                            <i className="fa fa-trash-o"></i>
                                        </div>
                                        <div className="shape"></div>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="box-footer clearfix">
                                <button type="button" className="pull-right btn btn-default" >Add Item
                                <i className="fa fa-plus"></i></button>
                                </div>
                            </div>
                            <div className="box layout-properties box-solid">
                                <div className="box-header">
                                <i className="fa fa-cogs"></i>
                                <h3 className="box-title">Layout Options</h3>
                                <div className="box-tools pull-right">
                                    <button type="button" className="btn bg-aqua btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                </div>
                                <div className="box-body border-radius-none">
                                <div id="image-layout-properties">
                                    <div className="form-group">
                                    
                                    <span className="product-img">
                                    <img src="https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg" alt="Product Image"/>
                                    </span>
                                    <span className="text">default-50x50.gif</span>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="inputWidth" className="control-label">Width</label>
                                    <div>
                                        <input id="inputWidth" type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                        data-slider-step="5" data-slider-value="100"
                                        data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                    </div>
                                    <label>Height</label>
                                    <div>
                                        <input type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                        data-slider-step="5" data-slider-value="100"
                                        data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="inputWidth" className="control-label">X</label>
                                    <div>
                                        <input id="inputWidth" type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                        data-slider-step="5" data-slider-value="100"
                                        data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                    </div>
                                    <label>Y</label>
                                    <div>
                                        <input type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                        data-slider-step="5" data-slider-value="100"
                                        data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label>Image Theme id</label>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                        background
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        left-up-corner
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" >
                                        left-bottom-corner
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        right-up-corner
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="">
                                        right-bottom-corner
                                        </label>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label>Override Color</label>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                        none
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                        <div className="input-group my-colorpicker2">
                                            <input type="text" className="form-control">
                                            <div className="input-group-addon">
                                            <i></i>
                                            </div>
                                        </div>
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        pallet-main
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" >
                                        pallet-secondery
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        pallete-third
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div id="text-layout-properties">
                                    <div className="form-group">
                                        <label>Text</label>
                                        <div className="input-group">
                                            <span className="input-group-addon">Text</span>
                                            <input type="text" className="form-control" placeholder="text here">
                                        </div>
                                        <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadiosText1" value="option1" checked="">
                                        Brand Name
                                        </label>
                                        </div>
                                        <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadiosText2" value="option2">
                                        Slogen
                                        </label>
                                        </div>
                                        <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadiosText3" value="option3" >
                                        Dynamic
                                        </label>
                                        </div>
                                        <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadiosText3" value="option3" >
                                        Static
                                        </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">Size (pt)</span>
                                        <input type="number" className="form-control" step="0.1">
                                    </div>
                                    </div>
                                    
                                    <div className="form-group">
                                    <label className="control-label">X</label>
                                    <div>
                                        <input type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                        data-slider-step="5" data-slider-value="100"
                                        data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                    </div>
                                    <label>Y</label>
                                    <div>
                                        <input type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                        data-slider-step="5" data-slider-value="100"
                                        data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Color</label>
                                        <div className="radio">
                                        <label>
                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                            <div className="input-group my-colorpicker2">
                                            <input type="text" className="form-control">
                                            <div className="input-group-addon">
                                                <i></i>
                                            </div>
                                            </div>
                                        </label>
                                        </div>
                                        <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        pallet-main
                                        </label>
                                        </div>
                                        <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" >
                                        pallet-secondery
                                        </label>
                                        </div>
                                        <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        pallete-third
                                        </label>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">Font</span>
                                        <input type="text" className="form-control" placeholder="text here">
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label>Font Style</label>
                                    <div className="checkbox">
                                        <label>
                                        <input type="checkbox">
                                        Bold
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                        <input type="checkbox">
                                        Italic
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                        <input type="checkbox">
                                        Underline
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                        <input type="checkbox" >
                                        Line Through
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                        <input type="checkbox">
                                        Overline
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div id="shape-layout-properties">
                                    <div className="form-group">
                                    <label>Shape Style</label>
                                    <textarea className="form-control" rows="3" placeholder='width: 0;
                                    height: 0;
                                    border-left: 50px solid transparent;
                                    border-right: 50px solid transparent;
                                    border-bottom: 100px solid red;' ></textarea>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="inputWidth" className="control-label">X</label>
                                    <div>
                                        <input id="inputWidth" type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                        data-slider-step="5" data-slider-value="100"
                                        data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                    </div>
                                    <label>Y</label>
                                    <div>
                                        <input type="text" value="" className="slider form-control" data-slider-min="0" data-slider-max="200"
                                        data-slider-step="5" data-slider-value="100"
                                        data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple">
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label>Override Color</label>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                        none
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                        <div className="input-group my-colorpicker2">
                                            <input type="text" className="form-control">
                                            <div className="input-group-addon">
                                            <i></i>
                                            </div>
                                        </div>
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        pallet-main
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" >
                                        pallet-secondery
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        pallete-third
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-9">
                            <div className="template-preview shadow"></div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="box-footer clearfix">
                        <button type="button" className="btn btn-default pull-right"><i className="fa fa-save"></i> Save</button>
                        </div>
                    </div>
                </div>
                
                </section>
            </div>
            
        )
    }
}