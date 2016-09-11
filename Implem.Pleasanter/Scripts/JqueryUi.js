﻿$(function () {
    $p.apply = function () {
        $('.edit-form-tabs:not(.applied)').tabs({
            beforeActivate: function (event, ui) {
                if (ui.newPanel.attr('data-action')) {
                    $p.send(ui.newPanel);
                }
            }
        }).addClass('applied');
        $('.edit-form-tabs-max:not(.applied)').tabs().addClass('applied');
        $('.button-icon').each(function () {
            var $control = $(this);
            var icon = $control.attr('data-icon');
            $control.button({ icon: icon });
        });
        $('#ui-datepicker-div').remove();
        $('select[multiple]:not(.applied)').multiselect({
            selectedList: 100,
            checkAllText: $p.display('Displays_CheckAll'),
            uncheckAllText: $p.display('Displays_UncheckAll'),
            noneSelectedText: '',
            click: function () {
                $p.changeMultiSelect($(this))
            },
            checkAll: function () {
                $p.changeMultiSelect($(this))
            },
            uncheckAll: function () {
                $p.changeMultiSelect($(this))
            }
        }).addClass('applied');
        $('.datepicker').datepicker({
            showButtonPanel: true,
            onSelect: function (date) {
                $p.getDataByInnerElement($(this))[this.id] = date;
            }
        });
        $('.radio').buttonset();
        $('.control-selectable:not(.applied)').selectable({
            stop: function () {
                $p.onSelectableSelected($(this));
            }
        }).addClass('applied');
        $('.control-slider-ui').each(function () {
            var $control = $('#' + $(this).attr('id').split(',')[0]);
            $(this).slider({
                min: parseFloat($(this).attr('data-min')),
                max: parseFloat($(this).attr('data-max')),
                step: parseFloat($(this).attr('data-step')),
                value: parseFloat($control.text()),
                slide: function (event, ui) {
                    $control.text(ui.value);
                    $p.setData($control);
                }
            });
        });
        $('.control-spinner:not(.applied)').each(function () {
            var $control = $(this);
            $control.spinner({
                min: $control.attr('data-min'),
                max: $control.attr('data-max'),
                step: $control.attr('data-step')
            }).css('width', function () {
                return $control.attr('data-width');
            });
            $control.addClass('applied');
        });
        $('[class*="enclosed"] .legend').each(function (e) {
            if ($(this).find('[class^="ui-icon ui-icon-carat-1-"]').length === 0) {
                $(this).prepend($('<span/>').addClass('ui-icon ui-icon-carat-1-s'));
            }
        });
        $('.status').each(function () {
            $(this).addClass($(this).find('option:selected').attr('data-class'));
        });
        $('.control-markdown:not(.applied)').each(function () {
            var $control = $(this);
            var $viewer = $('[id="' + this.id + '.viewer"]');
            $viewer.html($p.markup($control.val()));
            $p.resizeEditor($control, $viewer);
            $control.addClass('applied');
        });
        $('.markup:not(.applied)').each(function () {
            var $control = $(this);
            $control.html($p.markup($control.html(), true));
            $control.addClass('applied');
        });
    }
    $p.apply();
});