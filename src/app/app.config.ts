import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { headersInterceptor } from './shard/interceptor/headers.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { spinerInterceptor } from './shard/interceptor/spiner.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';





function HttpLoaderFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http , './assets/i18n/' , '.json' )
}

export const appConfig: ApplicationConfig = {
  providers: [   provideAnimations()
   , provideToastr(),provideRouter(routes,withViewTransitions()), provideClientHydration() , importProvidersFrom(HttpClientModule ,RouterModule,BrowserAnimationsModule,ToastrModule , NgxSpinnerModule ) , provideHttpClient(withFetch() , withInterceptors([headersInterceptor , spinerInterceptor])),importProvidersFrom(

    TranslateModule.forRoot({
      loader :{
        provide : TranslateLoader ,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
   )]
};
