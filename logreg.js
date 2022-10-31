
var app1 = new Vue({
  el:'.container',
  data: {
    h2: 'Добро пожаловать',
    plc1: 'Почта',
    plc2: 'Пароль',
    btn: 'Войти',
    h3: 'Нет аккаунта? Зарегистрироваться',
    page: 0,
    step: 1,
    login: '',
    email: '',
    pass: '',
    randomInt: '',
  },
  methods: {
    toReg(){
      // функция работает, когда мы нажимаем на нижний h3
      if(this.page == 0){// если видно блок входа в аккаунт, то
        document.querySelector('#log').style.transform = 'scale(0)';
        // уменьшаем блок
        this.page = 1;
        // ставим, что мы перешли на страницу регистрации
        setTimeout(() => {
          // только, когда див уже не видно, мы меняем все текста
          this.h2 = 'Регистрация аккаунта';
          this.plc1 = 'Ваше имя';
          this.plc2 = 'Ваше почта';
          this.btn = 'Дальше';
          this.h3 = 'Уже есть аккаунт? Войти';
          // очищаем инпуты
          document.querySelector('input[name="frs"]').value = '';
          document.querySelector('input[name="sec"]').value = '';
          // возвращяем исходный размер диву
          document.querySelector('#log').style.transform = 'scale(1)';
        }, 400)
        // 400 - это 0.4 секунды, задежка всех действий в setTimeout
      }else{
        switch (this.step) {
          case 1:
            // тут все наоборот
            document.querySelector('#log').style.transform = 'scale(0)';
            // уменьшаем див
            this.page = 0;
            // меняем значение на 0, что означает, что мы на входе
            setTimeout(() => {
              this.h2 = 'Добро пожаловать';
              this.plc1 = 'Почта';
              this.plc2 = 'Пароль';
              this.btn = 'Войти';
              this.h3 = 'Нет аккаунта? Зарегистрироваться';
              document.querySelector('input[name="frs"]').value = '';
              document.querySelector('input[name="sec"]').value = '';
              document.querySelector('#log').style.transform = 'scale(1)';
            }, 400)
            // и снова все меняем с задержкой
            break;
          case 2:


        }
      }
    },
    defaultLogin(){//функция работает, когда нажимаем на кнопку
      if(this.page == 0){//снова если мы находимся на 0 блоке(вход)
        //это все для примера
    }else{//иначе, то есть мы находимся на 1 блоке(регистрации)
      switch (this.step) {
        case 1:
          var elems = document.querySelector('#log').childNodes;
          // берем все дочерние элементы главного дива
          for(i=0;i < elems.length;i = i + 2){
            elems[i].style.opacity = '0';
          };// присваиваем им всем нулевую прозрачность для анимации
          setTimeout(() => {
            this.h2 = 'Регистрация аккаунта';
            this.plc1 = 'Пароль';
            this.plc2 = 'Повторите пароль';
            this.btn = 'Дальше';
            this.h3 = 'Неправильно ввели имя и почту? Назад';

            this.login = document.querySelector('input[name="frs"]').value;
            this.email = document.querySelector('input[name="sec"]').value

            document.querySelector('input[name="frs"]').value = '';
            document.querySelector('input[name="sec"]').value = '';
            for(i=0;i < elems.length;i = i + 2){
              elems[i].style.opacity = '1';
            };
          }, 400);
          break;
      }
    }
    }
  }
  });
