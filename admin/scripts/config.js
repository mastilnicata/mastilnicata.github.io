window.CMS_MANUAL_INIT = true;

var pagelayouts = ["default", "blank"];

var collections = 
[
    { 
        "name": "content-blocks" ,
        "label": "Content block",
        "folder": "/custom_collections/_content-blocks",
        "create": true,
        "slug": "{{year}}-{{month}}-{{day}}-{{hour}}-{{minute}}-{{slug}}",
        "identifier_field": "title",
        "fields":[
            { "label": "Hidden", "name": "hidden", "widget": "boolean", "default": true },
            { "label": "Title", "name": "title", "required": true },
            { "label": "Content", "name": "body", "widget": "markdown" },
            { "label": "Background color", "name": "bg-color", "default": "#B64144", "widget": "color-picker", "required": false },
            { "label": "Text color", "name": "color", "default": "white", "widget": "color-picker", "required": false },
            { "label": "Additionall CSS class", "name": "css-class", "default": "", "required": false }                    
        ]
    },
    {
        "name": "animated-banners",
        "label": "Animated banner",
        "folder": "custom_collections/_animated-banners",
        "create": true,
        "slug": "{{year}}-{{month}}-{{day}}-{{hour}}-{{minute}}-{{slug}}",
        "identifier_field": "title",
        "fields":[
          { "label": "Hidden", "name": "hidden", "widget": "boolean", "default": true },
          { "label": "Title", "name": "title", "required": true },
          { "label": "Content - in rows", "name": "body", "widget": "markdown" },
          { "label": "Background image", "name": "background-image", "widget": "image", "required": false, "media_library":  { "config": { "multiple": false }}}
        ]
    },
    {


        "name": "testimonial" ,
        "label": "Testimonial",
        "folder": "/custom_collections/_testimonials",
        "create": true,
        "slug": "{{year}}-{{month}}-{{day}}-{{hour}}-{{minute}}-{{slug}}",
        "identifier_field": "name",
        "fields":[
          { "label": "Hidden", "name": "hidden", "widget": "boolean", "default": true },
          { "label": "First and last name", "name": "name", "required": true },
          { "label": "Title", "name": "title", "required": true },
          { "label": "Tagline", "name": "tagline" },
          { "label": "Photo", "name": "photo", "widget": "image", "required": false, "media_library": { "config": { "multiple": false }}},
          { "label": "Content", "name": "body", "widget": "markdown" },
          { "label": "Gender icon", "name": "genger", "widget": "select", "default": "Male", "multiple": false, "options": ["Male", "Female"] }
        ]
    },
    {
        "name": "page-generators",
        "label": "Page",
        "folder": "/custom_collections/_page-generators",
        "create": true,
        "slug": "{{year}}-{{month}}-{{day}}-{{hour}}-{{minute}}-{{slug}}",
        "identifier_field": "name",
        "fields": [
            { "label": "Page name", "name": "name", "widget": "pagetitle", "required": true, "id": "page-generator-title", "mirrored": true, "editorComponents": ["animated-banner", "content-blocks", "testimonials"] },
            { "label": "Content", "name": "body", "widget": "markdown" },
            { "label": "Permalink", "name": "permalink", "widget": "permalink", "required": true, "mirrorfield": "page-generator-title" },
            { "label": "Page layout", "name": "layout", "widget": "select", "required": true, "options": pagelayouts, "default": "default" }
        ]
    }
  ]

var configurations = 
{
    "development": {
        "config": {
        "backend": {
            "name": "git-gateway"
        },
        "local_backend": true,
        "load_config_file": false,
        "media_folder": "Uploads",
        "public_folder": "Uploads",
        "collections": collections
        }
    },
    "production": {
        "config": {
        "backend": {
            "name": "github",
            "repo": "mastilnicata/mastilnicata.github.io",
            "branch": "work",
            "base_url": "https://warm-woodland-78106.herokuapp.com"
        },
        "local_backend": true,
        "load_config_file": false,
        "media_folder": "Uploads",
        "public_folder": "Uploads",
        "collections": collections
        }
    }
}




