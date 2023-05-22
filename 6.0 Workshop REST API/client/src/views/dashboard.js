import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFurniture } from '../api/data.js';
import { itemTemplate } from './common/item.js';


const dashboardTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Добре дошли в поредната авто-морга</h1>
        <p>Изберете си някоя бракма от каталога.</p>
    </div>
</div>
<div class="row space-top">
    ${data.map(itemTemplate)}
</div>`;


export async function dashboardPage(ctx) {
    const data = await getFurniture();
    ctx.render(dashboardTemplate(data));
}