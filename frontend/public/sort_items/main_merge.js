// current_selected_sort = "merge";
let canvas_parent_merge = "canvas_div_merge";
let drawing_canvas_merge;
function setup() {
  canvas_size[1] = windowHeight - 100;
  translate_components(windowWidth);
  div_check = document.getElementById(canvas_parent_merge);
  // console.log(div_check === null);
  if (div_check !== null) {
    drawing_canvas_merge = createCanvas(canvas_size[0], canvas_size[1]);
    drawing_canvas_merge.parent(canvas_parent_merge);
    frameRate(frame_rate);
    background(background_color);

    oscelerator = new p5.Oscillator(oscelerator_wave_type);

    element_maker(
      canvas_parent_merge,
      "h2",
      "Array Size 📏",
      [20, 0],
      size_element_attributes
    );

    array_size_slider = slider_maker(
      canvas_parent_merge,
      50,
      200,
      100,
      10,
      [20, 50],
      arraysize_slider_attributes
    );

    element_maker(
      canvas_parent_merge,
      "h2",
      "Slowdown 🏃‍♂️",
      [20, 60],
      sorting_speed_element_attributes
    );

    operation_speed_slider = slider_maker(
      canvas_parent_merge,
      10,
      110,
      operation_speed,
      10,
      [20, 110],
      arraysize_slider_attributes
    );

    // sort_dropdown_list = dropdown_maker(
    //   canvas_parent_merge,
    //   [30, 120],
    //   sort_list,
    //   current_selected_sort,
    //   sort_dropdown_attributes
    // );

    sound_checkbox = checkbox_maker(
      canvas_parent_merge,
      "Sound enabled",
      false,
      [20, 190],
      function () {
        sound_enabled = true;
      },
      sound_checkbox_attributes
    );

    if (!loop_has_started) {
      random_array = random_array_generator(
        array_size,
        lowest_val,
        highest_val
      );
    }

    array_size_slider.input(array_maker);
    operation_speed_slider.input(function () {
      operation_speed = int(operation_speed_slider.value());
    });

    // sort_dropdown_list.changed(function () {
    //   current_selected_sort = sort_dropdown_list.value();
    // });

    button_maker(
      canvas_parent_merge,
      [20, 230],
      "Run",
      function () {
        sort_caller("merge", random_array);
      },
      run_button_attributes
    );
  }

  // sort_caller("heap", random_array);
}

function draw() {
  if (div_check !== null) {
    background(background_color);
    array_drawer(random_array, high_val_index, low_val_index);
  }
}
