﻿$(function () {
    $(document).on('go', '#PreviousDataView', function () {
        var $dropdown = $($(this).attr('data-selector'));
        if ($dropdown.length === 1) {
            var $prev = $dropdown.find('option:selected').prev();
            if ($prev.length === 1) {
                $dropdown.val($prev.val());
            } else {
                $dropdown.val($dropdown.find('option').last().val());
            }
            $dropdown.trigger('change');
        }
    });
    $(document).on('go', '#NextDataView', function () {
        var $dropdown = $($(this).attr('data-selector'));
        if ($dropdown.length === 1) {
            var $prev = $dropdown.find('option:selected').next();
            if ($prev.length === 1) {
                $dropdown.val($prev.val());
            } else {
                $dropdown.val($dropdown.find('option').first().val());
            }
            $dropdown.trigger('change');
        }
    });
});
