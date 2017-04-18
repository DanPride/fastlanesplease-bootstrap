import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from "./app.component"
import { AppRoutingModule } from "./app-routing.module";
import {AppService} from "./app.service"
import { LogsModule } from './logs/logs.module';
import { BugsModule } from './bugs/bugs.module';
import { CommentService } from './comments/comments.service';
//import { CommentsModule } from './comments/comments.module';
import { DaysModule } from './days/days.module';
//Moved domains to routing module for testing
import { DriveService } from "./drives/drives.service";
//import { DrivesModule } from './drives/drives.module';
import { EventService } from './events/events.service';
//import { EventsModule } from './events/events.module';
import { FeedsModule } from './feeds/feeds.module';
import { InvoicesModule } from './invoices/invoices.module';
import { Iso3166Service } from './iso3166s/iso3166s.service';
//import { Iso3166sModule } from './iso3166s/iso3166s.module';
import { Iso639Service } from './iso639s/iso639s.service';
//import { Iso639sModule } from './iso639s/iso639s.module';
import { LangerrService } from './langerrs/langerrs.service';
//import { LangerrsModule} from "./langerrs/langerrs.module";
import { LangService } from './langs/langs.service';
//import { LangsModule} from "./langs/langs.module";
import { Lang1Service } from './langs1/langs1.service';
//import { Langs1Module} from "./langs1/langs1.module";
import { Lang2Service } from './langs2/langs2.service';
//import { Langs2Module} from "./langs2/langs2.module";
import { Lang3Service } from './langs3/langs3.service';
//import { Langs3Module} from "./langs3/langs3.module";
import { Lang4Service } from './langs4/langs4.service';
//import { Langs4Module} from "./langs4/langs4.module";
import { LettersModule } from './letters/letters.module';
import { LettextsModule } from './lettexts/lettexts.module';
import { LetvarsModule } from './letvars/letvars.module';
import { LineitemsModule } from './lineitems/lineitems.module';
import { OutputService } from './outputs/outputs.service';
//import { OutputsModule } from './outputs/outputs.module';
//import { PeopleModule } from './people/people.module';
import { PersonService } from "./people/people.service";
import { PhotosModule } from './photos/photos.module';
import { PlaceService } from './places/places.service';
//import { PlacesModule } from './places/places.module';
import { PopupsModule } from './popups/popups.module';
import { PostsModule } from './posts/posts.module';
import { RideService } from './rides/rides.service';
//import { RidesModule } from './rides/rides.module';
import { RunService } from './runs/runs.service';
//import { RunsModule } from './runs/runs.module';
import { Sched86sModule } from './sched86s/sched86s.module';
import { SchedulesModule } from './schedules/schedules.module';
import { UserService } from "./users/users.service";
//import { UsersModule } from './users/users.module';
import { ZerosModule } from './zeros/zeros.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//application wide shared Rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule, 
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [AppService, CommentService, DriveService, EventService, OutputService, PlaceService, PersonService, RideService, RunService, UserService, LangerrService, LangService, Lang1Service, Lang2Service, Lang3Service, Lang4Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
