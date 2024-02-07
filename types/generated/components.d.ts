import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsHeaderSection extends Schema.Component {
  collectionName: 'components_cards_header_sections';
  info: {
    displayName: 'Header Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    offerButton: Attribute.Component<'general.button'>;
    toggle: Attribute.Boolean;
  };
}

export interface CardsHeroSection extends Schema.Component {
  collectionName: 'components_cards_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    sliderItems: Attribute.Component<'general.section-items', true>;
  };
}

export interface CardsTabSection extends Schema.Component {
  collectionName: 'components_cards_tab_sections';
  info: {
    displayName: 'Tab Section';
    description: '';
  };
  attributes: {
    tabsItems: Attribute.Component<'general.blog-items', true>;
  };
}

export interface GeneralBlogItems extends Schema.Component {
  collectionName: 'components_general_blog_items';
  info: {
    displayName: 'Blog Items';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    artical: Attribute.Relation<
      'general.blog-items',
      'oneToOne',
      'api::artical.artical'
    >;
  };
}

export interface GeneralButton extends Schema.Component {
  collectionName: 'components_general_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    btnText: Attribute.String;
    redirectTo: Attribute.String;
  };
}

export interface GeneralHead extends Schema.Component {
  collectionName: 'components_general_heads';
  info: {
    displayName: 'Head';
  };
  attributes: {
    highlightedTitleText: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    subDescription: Attribute.Text;
  };
}

export interface GeneralSectionItems extends Schema.Component {
  collectionName: 'components_general_section_items';
  info: {
    displayName: 'Section Items';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    redirectTo: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface GeneralTabsItems extends Schema.Component {
  collectionName: 'components_general_tabs_items';
  info: {
    displayName: 'Tabs Head';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.header-section': CardsHeaderSection;
      'cards.hero-section': CardsHeroSection;
      'cards.tab-section': CardsTabSection;
      'general.blog-items': GeneralBlogItems;
      'general.button': GeneralButton;
      'general.head': GeneralHead;
      'general.section-items': GeneralSectionItems;
      'general.tabs-items': GeneralTabsItems;
    }
  }
}
