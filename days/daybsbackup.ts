<p>
 Outputs and Changes List
</p>
<ul class="days">
  <li *ngFor="let day of days" (click)="onSelect(day)"
      [class.selected]="day === selectedDay">
    <span class="badge">{{day.Id}}</span>
    <span>
  		{{day.Id}} 
    	{{day.DFC}} 
    	{{day.DLC}} 
    	{{day.User}} 
		{{day.XDrives}}
		{{day.XEvents}} 
		{{day.XLogs}} 
		{{day.XOutputs}} 
		{{day.XRides}} 
		{{day.XRuns0}} 
		{{day.XRuns1}} 
		{{day.XRuns2}} 
		{{day.XScheds}} 
		{{day.XSched86s}} 
		{{day.DScheds}} 
		{{day.RScheds}} 
		{{day.Output3}} 
		{{day.Monthly}} 
		{{day.EPlace}} 
		{{day.HelpUs}} 
		{{day.EStopCnt}} 
		{{day.Video}} 
		{{day.FeadCnt}} 
		{{day.NoAct}} 
		{{day.NoAct7}} 
		{{day.NoAct30}} 
		{{day.NoAct60}} 
		{{day.NoAct90}} 
		{{day.DriveCnt}} 
		{{day.EventCnt}} 
		{{day.FeedCnt}} 
		{{day.InactCnt}} 
		{{day.OutputCnt}} 
		{{day.PeopleCnt}} 
		{{day.PlaceCnt}} 
		{{day.UserCnt}} 
		{{day.RideCnt}} 
		{{day.RunCnt}} 
		{{day.SchedCnt}} 
		{{day.Sched86Cnt}} 
		{{day.DayTime}} 
		{{day.Face}} 
		{{day.About}} 
		{{day.Holy}} 
		{{day.Promo}} 
		{{day.TCode2}} 
      </span>
    <button class="delete"
      (click)="delete(day); $event.stopPropagation()">x</button>
  </li>
</ul>
 	