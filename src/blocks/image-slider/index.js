/**
 * Internal dependencies
 */
import edit from "./components/edit";
import metadata from "./block.json";
import save from "./components/save";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS.
import "./styles/style.scss";
import "./styles/styles.editor.scss";

import { GalleryAttributes } from "../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

const attributes = {
  ...GalleryAttributes,
  ...metadata.attributes,
};
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("responsive-block-editor-addons/image-slider", {
  /* translators: block name */
  title: __("Image Slider", "responsive-block-editor-addons"),
  category: "responsive_block_editor_addons",
  /* translators: block description */
  description: __("Create a fully responsive and smooth image slideshow of your products, services", "responsive-block-editor-addons"),
  attributes,
  icon: ResponsiveBlockEditorAddonsIcons.image_slider,
  keywords: [
    "responsive-block-editor-addons",
    /* translators: block keyword */
    __("gallery", "responsive-block-editor-addons"),
    /* translators: block keyword */
    __("photos", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  example: {
    attributes: {
      gridSize: "lrg",
      gutter: 5,
      images: [
        {
          url:
            "https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg",
        },
        { url: "https://s.w.org/images/core/5.3/Glacial_lakes,_Bhutan.jpg" },
        { url: "https://s.w.org/images/core/5.3/MtBlanc1.jpg" },
      ],
    },
  },
  edit,
  save,
});
