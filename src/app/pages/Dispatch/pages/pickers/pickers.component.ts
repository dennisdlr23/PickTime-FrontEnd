import { Component, OnInit, ViewChild } from '@angular/core';
import { PickersDialogComponent } from '../pickers-dialog/pickers-dialog.component';
import { PickersModel } from '../models/pickers.model';
import { PickersService } from '../services/pickers.service';
import { AuthService } from 'src/app/service/users/auth.service';
import { Messages } from 'src/app/helpers/messages';

@Component({
  selector: 'app-pickers',
  templateUrl: './pickers.component.html',
  styleUrls: ['./pickers.component.scss']
})
export class PickersComponent implements OnInit {
    @ViewChild(PickersDialogComponent) PickersDialog: PickersDialogComponent;
    loading: boolean = false;
    pickersModel: PickersModel[] = [];
    title: string = "Listado de Personal"

  constructor(
    private pickersService: PickersService,
    private auth: AuthService,

    ) { }

  ngOnInit(): void {
    this._getPickers();
  }

  async _getPickers(){
    try{
        this.loading = true;
        Messages.loading("Cargando...", "Espere un momento.");
        this.pickersModel = await this.pickersService.getPickers();
        Messages.closeLoading();
        this.loading = false;
    } catch (ex) {
        Messages.closeLoading();
        Messages.warning(ex);
    }
  }
  addPickers(){
    if(!this.auth.hasPermission("btn-add-picker")){
        Messages.warning("No tiene acceso", "No puede agregar por favor solicite el acceso")
        return;
      }
    this.PickersDialog.showDialog(new PickersModel(), true);

  }
  editPickers(pickersModel: PickersModel){
    if(!this.auth.hasPermission("btn-edit-picker")){
        Messages.warning("No tiene acceso", "No puede editar por favor solicite el acceso")
        return;
      }
    this.PickersDialog.showDialog(pickersModel, false);
  }
  samsModify(pickersModel: PickersModel[]){
    this.pickersModel = pickersModel;
  }


}
