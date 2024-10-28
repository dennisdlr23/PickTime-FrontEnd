import { Component, OnInit, ViewChild } from '@angular/core';
import { SamsDialogComponent } from '../sams-dialog/sams-dialog.component';
import { SamsModel } from '../models/sams.model';
import { SamsService } from '../services/sams.service';
import { AuthService } from 'src/app/service/users/auth.service';
import { Messages } from 'src/app/helpers/messages';

@Component({
  selector: 'app-sams',
  templateUrl: './sams.component.html',
  styleUrls: ['./sams.component.scss']
})
export class SamsComponent implements OnInit {
    @ViewChild(SamsDialogComponent) SamsDialog: SamsDialogComponent;
    loading: boolean = false;
    samsModel: SamsModel[] = [];
    title: string = "Listado de SAMs"

  constructor(
    private samsService: SamsService,
    private auth: AuthService,

    ) { }

  ngOnInit(): void {
    this._getSams();
  }

  async _getSams(){
    try{
        this.loading = true;
        Messages.loading("Cargando...", "Espere un momento.");
        this.samsModel = await this.samsService.getSams();
        Messages.closeLoading();
        this.loading = false;
    } catch (ex) {
        Messages.closeLoading();
        Messages.warning(ex);
    }
  }
  addSams(){
    if(!this.auth.hasPermission("btn-add-sams")){
        Messages.warning("No tiene acceso", "No puede agregar por favor solicite el acceso")
        return;
      }
    this.SamsDialog.showDialog(new SamsModel(), true);

  }
  editSams(samsModel: SamsModel){
    if(!this.auth.hasPermission("btn-edit-sams")){
        Messages.warning("No tiene acceso", "No puede editar por favor solicite el acceso")
        return;
      }
    this.SamsDialog.showDialog(samsModel, false);
  }
  samsModify(samsModel: SamsModel[]){
    this.samsModel = samsModel;
  }


}
