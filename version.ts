import {Component, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector: 'version-selector',
    template: '<div>Version: {{version}}</div>'
})

export class VersionComponent implements OnInit {

    private version: string;

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('./package.json')
            .map(res => res.json())
            .subscribe(data => this.version = data.version);
    }
}