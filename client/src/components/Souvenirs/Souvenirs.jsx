import React from 'react';
import './Souvenirs.css';

class Souvenirs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sou:`Это большой (700 грамм) сувенирный пряник производства ОАО «Витебскхлебпром», вещь с историей: такие сладости производили в Витебске еще во времена БССР.`,
      img:'images/souvenirs/pryanik2.jpg'
    };
  }

  showSou1 =()=>{
    this.setState({
      sou:`Это большой (700 грамм) сувенирный пряник производства ОАО «Витебскхлебпром», вещь с историей: такие сладости производили в Витебске еще во времена БССР.`,
      img:'images/souvenirs/pryanik2.jpg'
    });	    
  }


  showSou2 =()=>{
    this.setState({
      sou:`В Витебске есть даже сладости с главным символом города, это вафли, которые так и называются — «Ратуша».`,
      img:'images/souvenirs/ratusha2.jpg'
    });	    
  }

  showSou3 =()=>{
    this.setState({
      sou:`«Шоколадницу» производят на «Витебскхлебпроме», этот торт бывает четырех видов: миндальный, с коньяком, с вишней и классический. Цена зависит от размера: 380 или 750 грамм.`,
      img:'images/souvenirs/shokoladnitsa2.jpg'
    });	    
  }

  showSou4 =()=>{
    this.setState({
      sou:`Глазированные сырки, по отзывам, один из самых популярных продуктов из Беларуси. Витебские сырки (ОАО «Молоко») украшены картинками с котиками, так что вы их точно не перепутаете с другими. Поделимся инсайдерской информацией: еще больше витебских сырков у нас любят те, что производит Полоцкий молочный комбинат, в народе их называют «с пандами».`,
      img:'images/souvenirs/syrki2.jpg'
    });	    
  }

  showSou5 =()=>{
    this.setState({
      sou:`Ассортимент сладостей от фабрики «Витьба» очень широкий, но именно вафельные рулетики почему-то чаще всего просят привезти из Витебска.`,
      img:'images/souvenirs/tr.jpg'
    });	    
  }

  showSou6 =()=>{
    this.setState({
      sou: `Последний писк моды, черные продукты, не обошел и Витебск: с недавних пор наша кондитерская фабрика производит черные вафли и черные трубочки, модный готичный цвет им придает уголь в составе.`,
      img:'images/souvenirs/trblack.jpg'
    });	    
  }

	render(){
    // let sou = this.props.sou;
  return (
    <div>
      <center>
        <p><b> Что привезти из Витебска </b></p>
      </center>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7 col-md-7 col-7">
            <div className="hv-2 hv-md-2 hv-xl-2">
              <div> <img src={this.state.img} className="photo" alt="" /></div>
            </div>
          </div>
          <div className="col-xl-5 col-md-5 col-5">
            <div className="hv-2 hv-md-2 hv-xl-2">
              <h4>Подробнее</h4>
              <p>{this.state.sou}</p>
              <div className="ezhe">
                <p><b>Ещё:</b></p>
              </div>
              <button type="button" onClick={this.showSou2}>Вафли "Ратуша"</button>
              <br /><br />
              <button type="button" onClick={this.showSou3}>Шоколадница</button>
              <br /><br />
              <button type="button" onClick={this.showSou4}>Глазированные сырки</button>
              <br /><br />
              <button type="button" onClick={this.showSou5}>Вафельные рулетики</button>
              <br /><br />
              <button type="button" onClick={this.showSou6}>Витьба "Black"</button>
              <br /><br />
              <button type="button" onClick={this.showSou1}>В начало</button>

            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-12">
            <div className="h-1 h-md-1 h-xl-1">
              <h4>Где купить</h4>
              <p>Адреса магазинов: Корона
                Витебск, Бешенковичское шоссе, 3/1, <br /> Евроопт г. Витебск, пр-т Строителей, 15-1,<br /> Торговый
                центр "Ника" г.Витебск, ул.Титова, 136Б
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
  }
}

export default Souvenirs;