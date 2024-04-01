/*\
title: $:/plugins/oeyoews/vue-gemini/daily/app.js
type: application/javascript
module-type: library

每日一句
\*/

const { computed, ref } = window.Vue;

const getTemplate = require('$:/plugins/oeyoews/neotw-vue3/getTemplate.js');

const chat = require('../model/gemini');

const { API_KEY, speed, icon } = require('../config.js');

const app = (title, prompt = '每日一句, 类型为幽默') => {
  const quote = $tw.wiki.getTiddler(title).fields?.quote;
  const component = {
    setup() {
      const res = ref('');
      const isLoading = ref(true);
      const tip = ref('每日一句');

      const resHTML = computed(() => {
        return $tw.wiki.renderText('text/html', 'text/markdown', res.value, {
          parseAsInline: true,
        });
      });

      return {
        resHTML,
        tip,
        API_KEY,
        res,
        isLoading,
        text: '',
      };
    },

    mounted() {
      if (quote) {
        this.typewritter(quote);
        this.isLoading = false;
        return;
      }
      if (!API_KEY) {
        console.error('请填写你的 gemini API_KEY');
        this.isLoading = false;
        this.res = '请填写你的 gemini API_KEY';
        return;
      }
      this.aibot();
    },

    methods: {
      typewritter(quote) {
        const length = quote.length;
        let index = 0;
        const intervalId = setInterval(() => {
          if (index < length) {
            const text = quote.substring(0, index + 1);
            this.res = text + ' ' + icon;
            index++;
          } else {
            this.res = quote;
            clearInterval(intervalId);
          }
        }, speed); // 控制打字速度
      },
      async aibot() {
        try {
          const result = await chat(this.API_KEY).sendMessage(prompt);
          const response = await result.response;
          const quote = response.text();
          quote &&
            $tw.wiki.setText(title, 'quote', null, quote, {
              suppressTimestamp: true,
            });
          this.res = quote;
          // 如果输出为空， 显示重新生成按钮
        } catch (e) {
          console.error(e.message);
          this.res = e.message;
        }
        this.isLoading = false;
      },
    },

    template: getTemplate('$:/plugins/oeyoews/vue-gemini/templates/app.vue'),

    components: {},
  };
  return component;
};

module.exports = app;
