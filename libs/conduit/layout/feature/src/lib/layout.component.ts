import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'conduit-layout',
    template: `
        <conduit-header></conduit-header>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HeaderComponent],
})
export class LayoutComponent {}
