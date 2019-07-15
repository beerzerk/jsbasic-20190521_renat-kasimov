describe("7-module-1-task", function() {

    it('проверяем когда остался 1 день, 1 час', function() {
        const el = document.createElement('div');

        el.innerHTML = `
            <div>
                До конца акции осталось <span class="js-time-left time-left" data-from="2018.01.01 00:00:00" data-to="2018.01.02 01:00:00"></span>
            </div>
        `;

        const timeEl = el.querySelector('.js-time-left');
        TimeLeft.create(timeEl);

        expect(timeEl.innerHTML).toEqual(`1 день, 1 час`);
    });

  it('проверяем когда осталось 10 деней', function() {
    const el = document.createElement('div');

    el.innerHTML = `
            <div>
                До конца акции осталось <span class="js-time-left time-left" data-from="2018.01.01 00:00:00" data-to="2018.01.11 00:00:00"></span>
            </div>
        `;

    const timeEl = el.querySelector('.js-time-left');
    TimeLeft.create(timeEl);

    expect(timeEl.innerHTML).toEqual(`10 дней`);
  });

  it('проверяем когда завершенно', function() {
    const el = document.createElement('div');

    el.innerHTML = `
            <div>
                До конца акции осталось <span class="js-time-left time-left" data-from="2018.01.01 01:00:00" data-to="2018.01.01 00:00:00"></span>
            </div>
        `;

    const timeEl = el.querySelector('.js-time-left');
    TimeLeft.create(timeEl);

    expect(timeEl.innerHTML).toEqual(`завершенно`);
  });

  it('проверяем когда осталось 10 часов, 2 минуты', function() {
    const el = document.createElement('div');

    el.innerHTML = `
            <div>
                До конца акции осталось <span class="js-time-left time-left" data-from="2018.01.01 00:00:00" data-to="2018.01.01 10:02:00"></span>
            </div>
        `;

    const timeEl = el.querySelector('.js-time-left');
    TimeLeft.create(timeEl);

    expect(timeEl.innerHTML).toEqual(`10 часов, 2 минуты`);
  });

  it('проверяем когда 2 минуты, 30 секунд', function() {
    const el = document.createElement('div');

    el.innerHTML = `
            <div>
                До конца акции осталось <span class="js-time-left time-left" data-from="2018.01.01 00:00:00" data-to="2018.01.01 00:02:30"></span>
            </div>
        `;

    const timeEl = el.querySelector('.js-time-left');
    TimeLeft.create(timeEl);

    expect(timeEl.innerHTML).toEqual(`2 минуты, 30 секунд`);
  });

});